---
sidebar_position: 3
---

# Remote Access

Remote Access is **accessing your RPi computer without connecting it to a monitor.**
- Connect to your RPi from another computer like a laptop using it's IP Address.

## Get your RPi's IP Address

With your RPi connected to your TV, open it's **terminal**, this is where you can run system commands.

There, run the command: `hostname -I`
```bash title="RPi Terminal"
pi@raspberrypi:~ $ hostname -I
123.456.7.89 ... 
pi@raspberrypi:~ $ █
```

You can ignore any other text, what you need is **`123.546.7.89`**.

## Prepare your Remote Connection

Remember that IP Address, and then Prepare the following:
- Your RPi
- Power Supply
- Ethernet Cable

### Steps

:::caution

This only works for Windows Pro, due to the Program you'll be using.

:::
1. Connect the Ethernet cable to your RPi‘s Gigabit Ethernet port and to your laptop.
2. Turn on your RPi computer by connecting its power supply.
3. Click the Windows Icon, and type **Remote Desktop Connection.**

![Remote Desktop Connection](/img/tutorial/remoteDesktopConnection.png)

4. Type the IP Address that you got and click Connect.

![Remote Desktop Connection](/img/tutorial/remoteAttempt.png)

:::tip

Make sure to tick the checkmark so it won't have to ask for permission everytime.

:::

5. After some time, the **Login screen** for the rpi will appear, set these parameters:
- Session: `Xorg`
- username: `pi`
- password: `yourpassword`

:::note

`pi` is the default username.
`raspberry` is the default password if you haven't changed it.

:::

> If the rpi screen shows up, you did it. Good Job! : )
