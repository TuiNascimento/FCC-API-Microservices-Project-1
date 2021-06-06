module.exports = {

    handleDate: function(req,res){
        let requestDate = req.params.date

        let isUnixTimestamp = requestDate.split("").every( a => (/[0-9]/).test(a)) //true if every char of the String is a number
        let unixValue, utcValue

        let date = isUnixTimestamp ? new Date(parseInt(requestDate)) : new Date(requestDate)
            utcValue = new Date(date).toUTCString()
            unixValue = date.valueOf()

            if(!!utcValue && !!unixValue){
                res.json({
                        unix: unixValue,
                        utc: utcValue
                    })
            }
            else{
                res.json({error : "Invalid Date"})
            }
    }
}