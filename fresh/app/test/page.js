import Link from "next/link";

export default function Test() {

    return (
        <div>
        <Link href="/test/check" style={{color: 'white', textDecoration: 'none', }}>
            <h1>TEST PAGE</h1>
        </Link>
        </div>
    )
}