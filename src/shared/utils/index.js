import _ from 'lodash';
import { useMediaQuery } from 'react-responsive';

// import iconMap from './iconMap';

/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */
export const arrayToTree = (
  array,
  id = 'key',
  parentId = 'pid',
  children = 'children',
) => {
  const result = [];
  const hash = {};
  const data = _.cloneDeep(array);

  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });

  data.forEach((item) => {
    const hashParent = hash[item[parentId]];
    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });

  return result;
};

/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */
export const queryAncestors = (array, current, parentId, id = 'id') => {
  const result = [current];
  const hashMap = new Map();

  array.forEach((item) => hashMap.set(item[id], item));

  const getPath = (current) => {
    const currentParentId = hashMap.get(current[id])[parentId];
    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);

  return result;
};

/**
 *
 * @param {array} array
 * @returns {array} Return a array
 */
export const removeEmpty = (array) => _.chain(array).reject(_.isEmpty).value();

// Media Queries
export const useMobileMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 767.98px)' });

export const useTabletMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 991.98px)' });

export const useDesktopMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 991.98px)' });

export const useBigScreenMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 1824px)' });

export const useRetinaMediaQuery = () =>
  useMediaQuery({ query: '(min-resolution: 2dppx)' });

/**
 *
 * @param {array} array
 * @param {number} index
 * @param  {array} newItems
 * @returns {array} Return inserted array
 */
export const insertIntoArray = (array, index, ...newItems) => [
  // part of the array before the specified index
  ...array.slice(0, index),
  // inserted items
  ...newItems,
  // part of the array after the specified index
  ...array.slice(index),
];
