
export const fetchList = () => {
    return $.ajax({
        method: "GET",
        url: "/api/lists"
    })
}