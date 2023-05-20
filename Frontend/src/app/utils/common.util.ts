
/**
 * 'Rent & Utilities' => 'rent-&-utilities'
 * @param type 
 */
export const getIconClass = (item: string): string => {
  if (!item) {
    return '';
  }

  return item.toLocaleLowerCase().replace(/ /g, '-');
}


/**
 * 'Rent & Utilities' => 'rent-utilities' 
 * @param type
 */
export const getIconName = (type: string): string => {
  if (!type) {
    return '';
  }

  if ('Rent & Utilities' === type) {
    return 'rent-utilities';
  } else {
    return getIconClass(type);
  }

}

