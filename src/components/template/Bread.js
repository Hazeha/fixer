/*eslint-disable */
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

export default function Breadcrumb() {
  

  return(
    <div>
        <Breadcrumbs listClassName="flex flex-row gap-2" activeItemClassName="font-semibold" rootLabel="Forside" />
    </div>
  )
}