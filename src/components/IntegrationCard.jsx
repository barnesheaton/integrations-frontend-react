import { Button, Card } from "flowbite-react";


export default function IntegrationCard({data}) {

    const logoIsFromMake = () => {
        return String(data.icon).includes('make.com')
    }

 return (
    <Card className="max-w-sm">

    {/* <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}
        <div className="flex flex-col">

        <div className="flex items-center mb-4">
            {data.icon && (<img className={`h-auto w-8 mr-4 ${logoIsFromMake() && 'darken-logo'}`} src={data.icon} alt="image description" />)}
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.label}</h5>
        </div>
            {data.domain && (<a href={`https://${data.domain}`} target="_blank" className="inline-flex font-medium items-center text-purple-700 hover:underline">
            {data.domain}
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
            </a>)}
        </div>
    {/* </a> */}
    </Card>
 )   
}