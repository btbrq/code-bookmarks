import BookmarksView from "../bookmarks/bookmarks-view";

export const getBookmarksComponent = (loaded, bookmarks) => {
    if (loaded) {
        if (bookmarks.length > 0) {
            return <BookmarksView bookmarks={bookmarks} />
        } else {
            return (
                <div>Bookmarks file containing wrong data.</div>
            );
        }
    } else {
        return (
            <div>Please select a file with bookmarks.</div>
        );
    }
}