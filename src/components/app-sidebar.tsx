import {Sidebar, SidebarContent, SidebarHeader} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <ul className={"pl-5 pt-5"}>
                    <li className={"py-2"}>resume</li>
                    <li className={"py-2"}>projects</li>
                    <li className={"py-2"}>find me here</li>
                </ul>
            </SidebarContent>
        </Sidebar>
    )
}
