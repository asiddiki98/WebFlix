
export const fetchList = () => {
    return $.ajax({
        method: "GET",
        url: "/api/lists"
    })
}

export const addToList = (list) => {
    return $.ajax({
        method: "POST",
        url: "/api/lists",
        data: {list}
    })
}

export const deleteFromList = (list) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/lists/${list.video_id}`,
        data: { list }
    })
}