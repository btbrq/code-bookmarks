import { cloneDeep } from 'lodash'

export const filterBookmarks = (text, bookmarks) => {
    var bks = cloneDeep(bookmarks)

    bks.forEach(bc => {
        bc.bookmarksGroups.forEach(g => {
            g.bookmarks = [...g.bookmarks.filter(b => {
                return bookmarkMatches(b, text);
            })]
        })
    });

    bks.forEach(bc => {
        bc.bookmarksGroups = [...bc.bookmarksGroups.filter(g => g.bookmarks.length > 0)]
    });

    return bks;
}

const bookmarkMatches = (bookmark, text) => {
    return textMatches(bookmark.title, text) || textMatches(bookmark.url, text) || textMatches(bookmark.tldr, text) ;
}

const textMatches = (field, text) => {
    var regex = text.split(/ |(?=[A-Z])/).join(".*").toLowerCase();
    console.log(regex);
    return field.toLowerCase().match(regex);
}
