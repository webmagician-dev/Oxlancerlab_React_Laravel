    import moment from "moment";
    export function compareDates(dateStr1, dateStr2) {
        // Create Date objects from the date strings
        const date1 = new Date(dateStr1);
        const date2 = new Date(dateStr2);

        // Compare the dates using getTime()method
        return date1.getTime() === date2.getTime();
    }

    export const convertDate = (date) => {
        let dt = new Date(date);
        return moment(dt).format("YYYY-MM-DD");
    };
