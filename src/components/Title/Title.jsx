function Title({light, children}) {
    return (
        <div className="w-full text-center">
            <p className="font-EstedadLight text-zinc-500 text-xl">{light}</p>
            {children}
        </div>
    )
}

export default Title
