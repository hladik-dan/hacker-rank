function getDayName(dateString) {
    let dayNameShort = new Date(dateString).toDateString().split(" ")[0];

    switch (dayNameShort) {
        case "Mon":
            return "Monday";
        case "Tue":
            return "Tuesday";
        case "Wed":
            return "Wednesday";
        case "Thu":
            return "Thursday";
        case "Fri":
            return "Friday";
        case "Sat":
            return "Saturday";
        case "Sun":
            return "Sunday";
        default:
            return "";
    }
}
