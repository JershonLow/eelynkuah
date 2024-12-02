import {Sidebar, SidebarContent} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <ul className={"pl-5 pt-5"}>
                    <li className={"py-2 list-none"}>resume</li>
                    <li className={"py-2 list-none"}>projects</li>
                    <li className={"py-2 list-none"}>find me here</li>
                </ul>
            </SidebarContent>
        </Sidebar>
    )
}
