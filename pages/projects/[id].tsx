export interface Path{
  id: string;
}

export interface Props{
  params: {
    id: string
  }
}

export default function Page({ id }: Path) {
  return(
    <p>This page is {id}</p>
  )
}

// We need this to determine the id when the page is being built
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } }
    ],
    fallback: false
  }
}

export async function getStaticProps({params}: Props) {
  return{
    props: {
      id: params.id
    }
  }
}
