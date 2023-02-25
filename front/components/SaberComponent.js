import Link from "next/link";

export default function SaberComponent({
    color, size, id, name
}) {
    console.log(color);
    return (
        <div className="parent rounded-lg w-30 h-30 flex flex-col items-center justify-center p-4 gap-4">
            <div className="lightsaber" style={{ '--saberColor': color, '--saberHeight': size }}>
                <label for={id}></label>
                <input type="checkbox" id={id} defaultChecked />
                <div className="switch"></div>
                <div className="plasma saber"></div>
            </div>
            <Link href={`/sabre/${id}`} className="cursor-pointer text-gray-900 text-xl font-bold capitalize">{name}</Link>
        </div>
    )
}