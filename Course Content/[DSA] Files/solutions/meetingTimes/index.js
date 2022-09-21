/** Meeting Times **
 * 
 * Given an array of meeting times, determine if a person can
 * attend all meetings. 
 *  
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 * 
 */

 const meetingTimes = (times) => {
    times.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < times.length; i++){
        const currentStart = times[i][0]
        const prevEnd = times[i - 1][1]

        if (currentStart < prevEnd){
            return false
        }
    }

    return true

 };

module.exports = meetingTimes;