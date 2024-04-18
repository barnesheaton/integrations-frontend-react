export default function Pagination({onClick, currentPage, pageNumberOptions}) {
    const defaultPageNumberClass = 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
    const currentPageNumberClass = 'flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'

    return (
        <nav aria-label="Page navigation example" className="py-8">
            <ul className="inline-flex -space-x-px text-base h-10">
                {pageNumberOptions}{currentPage}
                <li>
                    <a onClick={() => onClick(currentPage - 1)} href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                {Array(5).fill().map((_, index) => {
                    const pageNumberOption = currentPage + index

                    console.log('pageNumberOption', pageNumberOption)

                    return (
                        <li key={`pagination-number-${index}`}>
                            <a onClick={() => onClick(index + 1)} href="#" className={currentPage - 1 === index ? currentPageNumberClass : defaultPageNumberClass }>{index + 1}</a>
                        </li>
                    )
                })}
                <li>
                    <a onClick={() => onClick(currentPage + 1)} href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    )
}