export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v256H0zM192 0h64v64h-64zM128 64h64v64h-64zM64 128h64v64h-64zM128 192h64v64h-64zM320 0h64v64h-64zM384 0h64v64h-64zM256 64h64v64h-64zM448 64h64v64h-64zM256 128h256v64h-256zM256 192h64v64h-64zM448 192h64v64h-64z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="${color}" d="M0 0h64v256H0zM192 0h64v64h-64zM128 64h64v64h-64zM64 128h64v64h-64zM128 192h64v64h-64zM320 0h64v64h-64zM384 0h64v64h-64zM256 64h64v64h-64zM448 64h64v64h-64zM256 128h256v64h-256zM256 192h64v64h-64zM448 192h64v64h-64z"/></svg>`
}