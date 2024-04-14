import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Form/Input";
import { SettingsTabs } from "./components/SettingsTabs";
import * as FileInput from './components/Form/FileInput'
import * as Select from './components/Form/Select'
import { CountrySelect } from "./components/CountrySelect";
import { Button } from "./components/Button";
import { Textarea } from "./components/Form/Textarea";
import { ThemeButton } from "./components/ThemeButton";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>
        <ThemeButton />
      </div>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal Info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue='Lucas' />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">
                  Last name
                </label>

                <InputRoot>
                  <InputControl id="lastName" defaultValue='Pereira' />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email adrress
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue='lucas.pfranca01@gmail.com'
              />
            </InputRoot>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">This will be displayed on your profile.</span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <InputRoot>
              <InputControl
                id="role"
                type="text"
                defaultValue='CTO'
              />
            </InputRoot>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>

            <CountrySelect />
            <div>

            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Timezone
            </label>
            <Select.Root name="timezone">
              <Select.Trigger>
                <Select.Value placeholder="Select your timezone..." />
              </Select.Trigger>

              <Select.Content>
                <Select.Item value="utc-3">
                  <Select.ItemText>
                    Pacific Standard Time (PST)
                    <span className="text-sm text-zinc-500">UTC 08:00</span>
                  </Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>


          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">Write a short introduction.</span>
            </label>

            <div className="flex flex-col gap-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <Select.Root defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>

                  <Select.Content>
                    <Select.Item value="normal">
                      <Select.ItemText>Normal text</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="md">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
                <div className="flex items-center gap-1">
                  <Button variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Link className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                name="bio"
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>


          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">Share a few snippets of your work.</span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}