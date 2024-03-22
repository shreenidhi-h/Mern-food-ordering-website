import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "./sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "../MobileNavLinks";

const MobileNav = () => {
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();

	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text bg-orange-500" />
			</SheetTrigger>
			<SheetContent className="space-y-3">
				<SheetTitle>
					{isAuthenticated ? (
						<span className="flex items-center font-bold gap-2">
							<CircleUserRound className="text-orange-500" />
							{user?.email}
						</span>
					) : (
						<span>Welcome to MernFoods.com!</span>
					)}
				</SheetTitle>
				<Separator />
				<SheetDescription className="flex">
					{isAuthenticated ? (
						<MobileNavLinks />
					) : (
						<Button
							onClick={() => loginWithRedirect()}
							className="flex-1 font-bold bg-orange-500"
						>
							Log In
						</Button>
					)}
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
