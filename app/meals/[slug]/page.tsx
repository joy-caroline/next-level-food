type PageProps = {
    params: {
        slug: string;
    }
}

export default function MealDetails ({params}: PageProps) {
    return (
        <main>
            <h1>Details {params.slug}</h1>
        </main>
    )
}