import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdStore } from 'react-icons/md';

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <MdStore />)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // make a document id ourselves
            .documentId('downtown')
        ),
      // add in the rest of our items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
