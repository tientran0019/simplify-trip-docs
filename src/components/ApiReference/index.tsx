/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-11-21 18:43:44

* Last updated on: 2024-11-21 18:43:44
* Last updated by: Tien Tran
*------------------------------------------------------- */

import React from 'react';
import { CopyToClipboard, Table, Td, Th, Tr } from 'nextra/components'
import Content from './content.mdx'

interface PropTypes {
	// sampleResponse: React.ReactElement;
}

const ApiReference: React.FC<PropTypes> = ({ sampleResponse }) => {
	// const { } = props;

	return (
		<div>
			<div className='flex gap-5'>
				<div className='flex-1 min-w-1'>
					<h5 className='_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 flex-1 _text-lg'>Request Body</h5>
					<h5 className='_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 flex-1 _text-lg'>Query Parameters</h5>
					<Table rules="none" border={0} width="100%" className='border-0'>
						<tbody>
							<Tr className='border-0'>
								<Td className='border-0'><code>query</code></Td>
								<Td className='border-0 w-full'>
									<code>`string`</code>

									Từ khoá tìm kiếm eSim theo tên, id, quốc gia hoặc khu vực
								</Td>
							</Tr>
							<Tr className='border-0'>
								<Td className='border-0'><code>take</code></Td>
								<Td className='border-0'>
									<code>`number`</code>

									Số lượng kết quả trả về cho một trang
								</Td>
							</Tr>
							<Tr className='border-0'>
								<Td className='border-0'><code>skip</code></Td>
								<Td className='border-0'>
									<code>`number`</code>

									Chỉ mục ban đầu để trả về kết quả.
								</Td>
							</Tr>
						</tbody>
					</Table>

					<h5 className='_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 flex-1 _text-lg'>Responses</h5>

					count
					required
					integer
					next
					string
					previous
					string
					results
					required
					Contract[]
				</div>
				<div className='flex-1 min-w-1'>
					<div className="flex items-center gap-2 mt-5 border-gray-200 dark:border-gray-600 border p-1 rounded-md">
						<div className='px-3 py-1.5 text-xs text-white duration-150 bg-blue-500 rounded-[4px]'>GET</div>
						<div className='flex-1'>
							<code>/api/v1/esims</code>
						</div>
						<CopyToClipboard getValue={() => `${process.env.NEXT_PUBLIC_PARTNERS_API_URL}/api/v1/esims`} />
					</div>
					<div className='flex items-center mt-8'>
						<h5 className='_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 flex-1 _text-lg'>Sample Request</h5>
						<a target="_black" className="text-brand" href={`${process.env.NEXT_PUBLIC_PARTNERS_API_URL}/api`}>Try it on Swagger</a>
					</div>
					<h5 className='_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 flex-1 _text-lg'>Sample Response</h5>
					<Content>

					</Content>
				</div>
			</div>
		</div>
	);
};

export default ApiReference;
