import { Button } from "@/components/ui/button";
import { MdDeleteForever } from "react-icons/md";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";

export const HomePage = () => {
    const usersinfo = [
        {
            id: '1',
            info: "I am a Computer Science Student.",
        },
        {
            id: '2',
            info: "I am a Computer Science Student.",
        },
        {
            id: '3',
            info: "I am a Computer Science Student.",
        },
    ];
    return (
        <main>
            <div className="flex flex-col items-center gap-y-8">{usersinfo.map((usersinfo) => {
                return (
                    <Card key={usersinfo.id} className="w-[800px]">
                        <CardContent>
                            {usersinfo.info}
                        </CardContent>
                        <CardFooter className="flex ">
                            <Button className="bg-red-500 text-white">Mark as Complete</Button>
                            <MdDeleteForever size={25} className="ml-auto" />
                        </CardFooter>
                    </Card>
                );
            })}

            </div>
        </main>
    );
};

export default HomePage;