// import { useEffect, useRef, useState } from 'react'

// export const useInfiniteLoading = (props: any) => {
//   const { getItems } = props
//   const [items, setItems] = useState([])
//   const pageToLoad = useRef(new URLSearchParams(window.location.search).get('page') || 1)
//   const initialPageLoaded = useRef(false)
//   const [hasNext, setHasNext] = useState(true) /* 1 */
//   const [hasPrevious, setHasPrevious] = useState(() => pageToLoad.current !== 1) /* 2 */

//   const loadItems = async (page, itemCombineMethod) => {
//     const data = await getItems({ page })
//     setHasNext(data.totalPages > pageToLoad.current) /* 3 */
//     setHasPrevious(pageToLoad.current > 1) /* 4 */
//     setItems(prevItems => {
//       /* 5 */
//       return itemCombineMethod === 'prepend' ?
//         [...data.items, ...prevItems] :
//         [...prevItems, ...data.items]
//     })
//   }

//   const loadNext = () => {
//     pageToLoad.current = Number(pageToLoad.current) + 1
//     // history.replace(`?page=${pageToLoad.current}`)
//     loadItems(pageToLoad.current, 'append')
//   }

//   const loadPrevious = () => {
//     pageToLoad.current = Number(pageToLoad.current) - 1
//     // history.replace(`?page=${pageToLoad.current}`)
//     loadItems(pageToLoad.current, 'prepend')
//   }

//   useEffect(() => {
//     if (initialPageLoaded.current) {
//       return
//     }

//     loadItems(pageToLoad.current, 'append')
//     initialPageLoaded.current = true
//   }, [loadItems])

//   return {
//     items,
//     hasNext,
//     hasPrevious,
//     loadNext,
//     loadPrevious
//   }
// }


export { }