export default class MongoDb {

    getCustomerDetails(){
        const customerData = [
            {
                no:1,
                name: "Prashant Kelkar",
                currBalance: 100000,
                email: "prkelkar@gmail.com",
                city: "Bareilly",
                lastTrans:"Monday 5th September"
            },
            {
                no:2,
                name: "Mangal Nath",
                currBalance: 1200,
                email: "mnath@gmail.com",
                city: "Agra",
                lastTrans:"Monday 5th September"
            },
            {
                no:3,
                name: "Seema Roy",
                currBalance: 170000,
                email: "seema@gmail.com",
                city: "Delhi",
                lastTrans:"Monday 5th September"
            },
            {
                no:4,
                name: "Durjoy Datta",
                currBalance: 9000,
                email: "ddutta@gmail.com",
                city: "Dehradun",
                lastTrans:"Monday 5th September"
            },
            {
                no:5,
                name: "Kalpana Gupta",
                currBalance: 80000,
                email: "kalpana@gmail.com",
                city: "Goa",
                lastTrans:"Monday 5th September"
            },
            {
                no:6,
                name: "Alekh Kumar",
                currBalance: 81982,
                email: "alekh@gmail.com",
                city: "Mussorie",
                lastTrans:"Monday 5th September"
            },
            {
                no:7,
                name: "Raman Bedi",
                currBalance: 100000,
                email: "raman@gmail.com",
                city: "Jaipur",
                lastTrans:"Monday 5th September"
            },
            {
                no:8,
                name: "Don Joe",
                currBalance: 42000,
                email: "donna@gmail.com",
                city: "Goa",
                lastTrans:"Monday 5th September"
            },
            {
                no:9,
                name: "Naman Gupta",
                currBalance: 785600,
                email: "namang@gmail.com",
                city: "Pondicherry",
                lastTrans:"Monday 5th September"
            },
            {
                no:10,
                name: "Divakar Rastogi",
                currBalance: 2345,
                email: "prkelkar@gmail.com",
                city: "Kanpur",
                lastTrans:"Monday 5th September"
            },
        ];
        return customerData;
    }
    
    getNames(){
        const names = [
            "Divakar Rastogi",
            "Naman Gupta",
            "Don Joe",
            "Raman Bedi",
            "Alekh Kumar",
            "Kalpana Gupta",
            "Durjoy Datta",
            "Seema Roy",
            "Mangal Nath",
            "Prashant Kelkar"
        ];
        return names;
    }
}
