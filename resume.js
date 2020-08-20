/*  o interrofação significa que é opicional */
interface Props {
	username: string;
	name: string;
	avatarUrl: string;
	followers: number;
	following: number;
	company?: string;
	location?: string;
	email?: string;
	blog?: string;
}
