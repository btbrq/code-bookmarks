import { cloneDeep } from 'lodash'

export const filterBookmarks = (text, bookmarks) => {
    var bks = cloneDeep(bookmarks)

    bks.forEach(bc => {
        bc.bookmarksGroups.forEach(g => {
            g.bookmarks = [...g.bookmarks.filter(b => {
                return bookmarkMatches(b, text);
            })]
        })
    })

    return bks;
}

const bookmarkMatches = (bookmark, text) => {
    return textMatches(bookmark.title, text) || textMatches(bookmark.url, text) || textMatches(bookmark.tldr, text) ;
}

const textMatches = (field, text) => {
    var regex = text.split(/[(?=\\p{Lu}) ]/).join(".*").toLowerCase();
    return field.toLowerCase().match(regex);
}
