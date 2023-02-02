import React from 'react'
import Link from 'next/link'

type Props = {
    category: string
    isActive: boolean
}

function NavLink({category, isActive}: Props) {
  return (
    <Link
    className={`navLink ${isActive && "underline decoration-slate-700 underline-offset-4 font-bold text-lg"}`}
    href={`/news/${category}`}>{category}</Link>
  )
}

export default NavLink