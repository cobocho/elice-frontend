import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Link href="/user/add">
				<Button>Add User</Button>
			</Link>
			<Link href="/user/list">
				<Button>User List</Button>
			</Link>
		</div>
	);
}
