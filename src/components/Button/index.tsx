/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-11-21 00:04:13

* Last updated on: 2024-11-21 00:04:13
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
import cx from 'clsx';

interface PropTypes {
	className?: string;
	children: string;
	variant?: 'default' | 'outline';
}

const Button: React.FC<PropTypes> = (props) => {
	const { className, variant = 'default', children } = props;

	if (variant === 'outline') {
		return (
			<button
				className={cx(
					'px-3 py-2 h-[33px] text-xs text-gray-700 dark:text-gray-300 dark:border-gray-500 border rounded-md duration-100 hover:border-brand active:shadow-lg',
					className,
				)}
			>
				{children}
			</button>
		);
	}

	return (
		<button
			className={cx(
				'px-3 py-2 h-[33px] text-xs text-white duration-150 bg-brand rounded-md hover:bg-brand-800 active:bg-brand-900',
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
