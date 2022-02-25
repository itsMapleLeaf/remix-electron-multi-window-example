import { Form } from "@remix-run/react"
import { BrowserWindow } from "~/electron.server"

export async function action() {
  const win = new BrowserWindow()
  await win.loadURL("http://localhost/hi")
  return {}
}

export default function Index() {
  return (
    <Form method="post">
      <button>open new window</button>
    </Form>
  )
}
