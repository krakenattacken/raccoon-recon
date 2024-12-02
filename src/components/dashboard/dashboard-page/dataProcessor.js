export const processFrequencyData = (data) => {
    const conditionFreq = {};
    const behaviourFreq = {};
    const timeBuckets = {};

    for (let hour = 0; hour < 24; hour++) {
        timeBuckets[hour] = 0;
    }

    data.forEach((submission) => {
        if (submission.condition) {
            submission.condition.forEach((cond) => {
                conditionFreq[cond] = (conditionFreq[cond] || 0) + 1;
            });
        }

        if (submission.behaviour) {
            submission.behaviour.forEach((beh) => {
                behaviourFreq[beh] = (behaviourFreq[beh] || 0) + 1;
            });
        }

        // count by hour
        if (submission.time) {
            const time = new Date(submission.time);
            const hour = time.getHours() + 1; 
            timeBuckets[hour] += 1;
        }
    });

    return {
        conditionFrequency: conditionFreq,
        behaviourFrequency: behaviourFreq,
        timeFrequency: Object.entries(timeBuckets).map(([hour, count]) => ({ hour, count })),
    };
};
