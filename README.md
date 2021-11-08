# AWS SNS action
This action sends message via AWS SNS
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

#### Inputs
  * `accessKeyId` (**Required** - Access Key Id)
  * `secretAccessKey` (**Required** - Secret Access Key)
  * `region` (**Required** - Region)

## Example
```yaml
name: Test SNS
on: [push]

jobs:
  sns_job:
    runs-on: ubuntu-latest
    name: test sns action
    steps:
      - name: Checkout [step]
        uses: actions/checkout@v2
      - name: SNS Action [step]
        uses: awedis/aws-sns-action@v1.0
        id: sns
        with:
          accessKeyId: ${{ secrets.AWS_ACCESS_KEY_ID }}
          secretAccessKey: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          region: ${{ secrets.REGION }}
```