// import { useQuery } from 'react-query'

// import {getSubjects} from '../api/subjects'

// const defaultTodos = []

// const retrieveSubjects = async () => {  
//         const response = await getSubjects()
//         return response.data
// }

// export const useSubjects = () => {
//     const { data: subjects, isError: error, isLoading, refetch } = useQuery({
//         queryKey: [`subjects`],
//         queryFn: retrieveSubjects,
//     })

//   return {
//     isLoading,
//     error,
//     subjects: subjects || defaultTodos,
//     refetch
//   }
// }