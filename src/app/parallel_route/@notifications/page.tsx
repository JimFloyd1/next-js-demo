import Card from "@/src/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
    <Card>
        <div> Notifications</div>
        <Link href ="/parallel_route/archived">Archived</Link>
    </Card>
    );
}
