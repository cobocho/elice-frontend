'use client';

import { useApiUsersGet } from '@/services/사용자/사용자';

export default function Home() {
	const data = useApiUsersGet();

	return <div>dsa</div>;
}
