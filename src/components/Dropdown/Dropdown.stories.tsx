import React, { useState } from 'react'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { IconSettings, IconLogOut, IconChevronDown } from './../../index'
import Typography from '../Typography'

import { Dropdown } from './'
import { IconLogIn } from '../Icon/icons/IconLogIn'
import { Input } from '../Input'
import { IconSearch } from '../Icon/icons/IconSearch'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

export const Default = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <div>
            <Typography.Text small className="block">
              Signed in as{' '}
            </Typography.Text>

            <Typography.Text small strong>
              tom@example.com{' '}
            </Typography.Text>
          </div>
        </Dropdown.Misc>,
        <Dropdown.Seperator />,
        <Dropdown.Label>Group label</Dropdown.Label>,
        <Dropdown.Item onClick={() => console.log('clicked')}>
          Account
        </Dropdown.Item>,
        <Dropdown.Item>
          Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>
        </Dropdown.Item>,
        <Dropdown.Seperator />,
        <Dropdown.Item icon={<IconLogIn size="tiny" />}>Log out</Dropdown.Item>,
      ]}
    >
      <Button as="span" type="secondary" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

Default.args = {}

export const doNotcloseOverlay = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Misc>,
        <Dropdown.Seperator />,
        <Dropdown.Item>Account</Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Dropdown.Item>
          <Button icon={<IconLogOut />}>Log out</Button>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

doNotcloseOverlay.args = {}

export const withCustomStyles = (args: any) => (
  <div
    style={{
      margin: '0 auto',
      minHeight: '420px',
      marginTop: '220px',
      marginLeft: '400px',
    }}
  >
    <Dropdown
      overlayStyle={{ minWidth: '500px' }}
      placement="bottomRight"
      {...args}
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Seperator />,
        <Dropdown.Item>Account</Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Dropdown.Seperator />,
        <Dropdown.Item>
          <Button type="default" icon={<IconLogOut />}>
            Log out
          </Button>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

withCustomStyles.args = {}

export const SearchList = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Item>
          <Input size="tiny" icon={<IconSearch />} autofocus={false} />
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Seperator />,
        <Dropdown.Item icon={<IconLogIn />}>
          <Typography.Text>Log out</Typography.Text>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

SearchList.args = {}

export const Checkbox = (args: any) => {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.Item icon={<IconSettings size="small" />}>
            Account
          </Dropdown.Item>,
          <Dropdown.Item>Settings</Dropdown.Item>,
          <Dropdown.Seperator />,
          <Dropdown.Checkbox checked={checked} onChange={setChecked}>
            Show subtitles
          </Dropdown.Checkbox>,
        ]}
      >
        <Button as="span" type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}

export const Radio = (args: any) => {
  const [value, setValue] = useState('red')

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.RadioGroup value={value} onChange={setValue}>
            <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
            <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
            <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
          </Dropdown.RadioGroup>,
        ]}
      >
        <Button as="span" type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}
