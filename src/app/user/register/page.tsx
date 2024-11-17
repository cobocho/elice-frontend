'use client';

import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { useApiUsersGet } from '@/services/사용자/사용자';
import React from 'react';

const UserPage = () => {
	const query = useApiUsersGet();

	console.log(query.data);

	return (
		<div>
			<h1>USERS</h1>
			<Table>
				<TableHeader>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Birth Date</TableCell>
						<TableCell>Job</TableCell>
						<TableCell>Personality</TableCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					{query.data?.map((user) => (
						<TableRow key={user.user_id}>
							<TableCell>{user.user_id}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.birth_date}</TableCell>
							<TableCell>{user.job}</TableCell>
							<TableCell>{user.personality}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default UserPage;
