'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useApiUsersPost } from '@/services/사용자/사용자';
import React from 'react';
import { apiUsersPostBody } from '@/services/사용자/사용자.zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const UserPage = () => {
	const addMutation = useApiUsersPost();

	const userForm = useForm({
		resolver: zodResolver(apiUsersPostBody),
		defaultValues: {
			birth_date: '2021-08-02',
			job: 'developer',
			name: 'test',
			personality: '내향적',
			user_id: '',
		},
	});

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await userForm.trigger();

		if (userForm.formState.isValid) {
			addMutation.mutate({
				data: {
					birth_date: userForm.getValues('birth_date'),
					interest: [],
					job: userForm.getValues('job'),
					name: userForm.getValues('name'),
					personality: userForm.getValues('personality') as
						| '내향적'
						| '양면성'
						| '외향적',
					user_id: userForm.getValues('user_id'),
				},
			});
		}
	};

	return (
		<div>
			<h1>ADD USER</h1>
			<Form {...userForm}>
				<form onSubmit={onSubmit}>
					<FormField
						control={userForm.control}
						name="user_id"
						render={({ field }) => (
							<FormItem>
								<FormLabel>ID</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={userForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={userForm.control}
						name="birth_date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>birth_date</FormLabel>
								<FormControl>
									<Input
										type="date"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={userForm.control}
						name="job"
						render={({ field }) => (
							<FormItem>
								<FormLabel>job</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={userForm.control}
						name="personality"
						render={({ field }) => (
							<FormItem>
								<FormLabel>성향</FormLabel>
								<FormControl>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
										}}
									>
										<SelectTrigger>
											<SelectValue></SelectValue>
										</SelectTrigger>
										<SelectContent>
											{['내향적', '양면성', '외향적'].map((item) => (
												<SelectItem
													key={item}
													value={item}
												>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button>ADD</Button>
				</form>
			</Form>
		</div>
	);
};

export default UserPage;
