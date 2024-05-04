import React from 'react'

const BreadCrumb = () => {
    return (
        <nav className="flex flex-col mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-xs">
                <li className="inline-flex items-center">
                    <a href="#" className="text-xs inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-600">
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        /
                        <a href="#" className="ms-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-gray-600">Projects</a>
                    </div>
                </li>
            </ol>
            <p className="mt-2 text-xs font-semibold text-gray-700">Sales BDE</p>
        </nav>
    )
}

export default BreadCrumb