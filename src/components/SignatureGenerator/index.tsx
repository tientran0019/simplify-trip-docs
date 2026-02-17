/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-12-05 23:45:18

* Last updated on: 2024-12-05 23:45:18
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import { CopyToClipboard } from 'nextra/components';
import React from 'react';

import hmacSHA256 from 'crypto-js/hmac-sha256';
import encHex from 'crypto-js/enc-hex';

interface PropTypes {
	// prop: type;
}

function deepFlattenToObject(obj: object, prefix = '') {
	return Object.keys(obj).reduce((acc, k) => {
		const pre = prefix.length ? prefix + '_' : '';
		if (typeof obj[k] === 'object' && obj[k] !== null) {
			Object.assign(acc, deepFlattenToObject(obj[k], pre + k));
		} else {
			acc[pre + k] = obj[k];
		}
		return acc;
	}, {});
}

function convertObjToQueryStr(object: object) {
	const flatObj = deepFlattenToObject(object);

	return Object.keys(flatObj)
		.sort()
		.filter((key) => flatObj[key] !== undefined)
		.map((key) => {
			let value = flatObj[key];
			// Set empty string if null
			if ([null, undefined, "undefined", "null"].includes(value)) {
				value = "";
			}

			return `${key}=${value}`;
		})
		.join("&");
}


const SignatureGenerator: React.FC<PropTypes> = () => {
	// const { } = props;
	const [isPasswordHidden, setPasswordHidden] = React.useState(true)
	const [checksumKey, setChecksumKey] = React.useState('')
	const [data, setData] = React.useState('')
	const [dataOutput, setDataOutput] = React.useState('')
	const [signature, setSignature] = React.useState('')
	const [signatureCompare, setSignatureCompare] = React.useState('')
	const [error, setError] = React.useState('')
	const [verify, setVerify] = React.useState('')

	React.useEffect(() => {
		if (!data || !checksumKey) {
			setSignature('');
			setDataOutput('');

			return;
		}

		try {
			const obj = JSON.parse(data);

			const output = convertObjToQueryStr(obj);

			const hash = hmacSHA256(output, checksumKey);
			setDataOutput(output);
			setSignature(encHex.stringify(hash));
		} catch (error) {
			setSignature('');
			setError('Data không đúng định dạng JSON');
		}
	}, [data, checksumKey]);

	React.useEffect(() => {
		if (!signatureCompare || !signature) {
			setVerify('');

			return;
		}
		setVerify(signature === signatureCompare ? 'Hợp lệ!' : 'Không hợp lệ');
	}, [signatureCompare, signature]);

	return (
		<div className="my-10 w-full">
			<div>
				<label>
					Checksum Key
				</label>
				<div className="relative mt-2">
					<button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
						onClick={() => setPasswordHidden(!isPasswordHidden)}
					>
						{
							isPasswordHidden ? (
								<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
								</svg>

							)
						}
					</button>
					<input
						type={isPasswordHidden ? "password" : "text"}
						placeholder="Enter your checksumKey"
						value={checksumKey}
						onChange={(e) => setChecksumKey(e.target.value)}
						className="w-full pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-green-800 rounded-lg"
					/>
				</div>
			</div >
			<div className="mt-5">
				<label>
					Data
				</label>
				<div className="relative mt-2">
					<textarea
						rows={6}
						value={data}
						onChange={(e) => { setError(''); setData(e.target.value) }}
						placeholder="Enter your data"
						className="w-full pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-green-800 rounded-lg"
					/>
				</div>
				{error && <p className="text-red-500 text-xs">{error}</p>}
			</div >
			<div className="mt-5">
				<label>
					Data Output
				</label>
				<div className="relative mt-2">
					<CopyToClipboard className=" absolute right-1 border-0 top-1 active:text-gray-600" getValue={() => dataOutput} />
					<textarea
						rows={6}
						value={dataOutput}
						disabled
						placeholder="Data for creating a Signature"
						className="w-full pr-12 pl-3 py-2 bg-gray-1000 outline-none border rounded-lg"
					/>
				</div>
			</div >
			<div className="mt-5">
				<label>
					Signature
				</label>
				<div className="relative mt-2">
					<CopyToClipboard className=" absolute right-1 border-0 top-1 active:text-gray-600" getValue={() => signature} />
					<input
						disabled
						value={signature}
						className="w-full pr-12 pl-3 py-2 bg-gray-1000 outline-none border rounded-lg"
					/>
				</div>
			</div >
			<div className="mt-5">
				<label>
					Verify with the signature received from SimplifyTrip (in the headers).
				</label>
				<div className="relative mt-2">
					<input
						value={signatureCompare}
						onChange={(e) => { setSignatureCompare(e.target.value) }}
						className="w-full pr-12 pl-3 py-2 bg-transparent outline-none border focus:border-green-800 rounded-lg"
					/>
				</div>
			</div>
			{
				verify &&
				<div className="mt-5">
					<label className={verify === 'Hợp lệ!' ? 'text-green-500' : 'text-red-500'}>
						{verify}
					</label>
				</div>
			}
		</div>
	);
};

export default SignatureGenerator;
