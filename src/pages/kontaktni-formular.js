import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Flex, Section, Div, H1 } from 'components/Elements'
import Seo from 'components/Seo'
import Button from 'components/Button'
import { navigate } from 'gatsby'
import { useIntl } from 'react-intl'

const Wrapper = styled(Flex)`
  justify-content: center;
`

const Form = styled.form`
  max-width: 900px;
  padding: 0 16px;
  ${({ theme }) => theme.font.small};

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      margin-top: 20px;
    }
  `}
`

const Title = styled(Div)`
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 8px;
`
const FormItem = styled(Div)`
  margin: 60px 0;
  position: relative;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      margin: 20px 0;
    }
  `}
`

const sharedIput = css`
  padding: 20px;
  outline: none !important;
  width: 100%;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.font.small};

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      padding: 8px 16px;
    }
  `}
`
const Input = styled.input`
  ${sharedIput}
`

const RadioLabel = styled.label`
  padding-left: 20px;
  cursor: pointer;
`

const RadioWrapper = styled(Flex)`
  margin: 20px 0;
  align-items: center;
  cursor: pointer;
`

const RadioCircle = styled.label`
  content: '';
  display: inline-block;
  width: 50px;
  height: 50px;
  border: solid 5px ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  cursor: pointer;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      width: 40px;
      height: 40px;
      border: solid 4px ${({ theme }) => theme.colors.black};
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      width: 30px;
      height: 30px;
      border: solid 3px ${({ theme }) => theme.colors.black};
    }
  `}
`

const Radio = styled.input`
  display: none;
  &:checked ~ {
    ${RadioCircle} {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
  &:checked ~ {
    ${RadioLabel} {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`

const TextArea = styled.textarea`
  ${sharedIput}
  resize: none;
`

const choices = formatMessage => [
  { id: 'hen', title: formatMessage({ id: 'contact-interest-1' }) },
  { id: 'garden', title: formatMessage({ id: 'contact-interest-2' }) },
  { id: 'sheep', title: formatMessage({ id: 'contact-interest-3' }) },
  { id: 'goat', title: formatMessage({ id: 'contact-interest-4' }) },
]

const ContactForm = () => {
  const { formatMessage } = useIntl()
  const [interestedIn, setInterestedIn] = useState([])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [animalName, setAnimalName] = useState('')
  const interestedInStr = interestedIn.reduce(
    (acc, curr) => (acc = `${acc} ${curr.title}`),
    ''
  )
  const url =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfx6MsGDo9iY4sv0s21ZzDU8GaOs90OnWNw_dVd_wHjoWSc9A/formResponse?'
  const data = `entry.1754747753=${interestedInStr}&entry.1205926966=${fullName}&entry.454974113=${email}&entry.604248877=${phone}&entry.798225549=${animalName}&entry.523846686=${note}`

  const onSelect = (id, title, alreadySelected) => {
    if (alreadySelected) {
      setInterestedIn([...interestedIn].filter(item => item.id !== id))
    } else {
      setInterestedIn([...interestedIn, ...[{ id, title }]])
    }
  }

  return (
    <Section>
      <Seo />
      <Wrapper>
        <Form
          validate
          onSubmit={event => {
            event.preventDefault()
            fetch(url + data, {
              method: 'POST',
            })
              .then(res => res.json())
              .then(() => false)
              .catch(error => {
                console.error('Error:', error) // eslint-disable-line no-console
              })
            alert(formatMessage({ id: 'contact-sent-message' }))
            navigate('/')
          }}
        >
          <H1 textAlign="center">{formatMessage({ id: 'contact-title' })}</H1>

          <FormItem>
            <Title>{formatMessage({ id: 'contact-interest' })}</Title>
            {choices(formatMessage).map(({ title, id }) => {
              const alreadySelected = interestedIn.find(item => item.id === id)

              return (
                <RadioWrapper key={title}>
                  <Radio
                    checked={alreadySelected}
                    onChange={() => onSelect(id, title, alreadySelected)}
                    id={id}
                    type="radio"
                    value={alreadySelected}
                  />
                  <RadioCircle htmlFor={id} />
                  <RadioLabel htmlFor={id}>{title}</RadioLabel>
                </RadioWrapper>
              )
            })}
          </FormItem>
          <FormItem>
            <Title>{formatMessage({ id: 'contact-fullname' })}</Title>
            <Input
              onChange={evt => setFullName(evt.target.value)}
              value={fullName}
              placeholder={formatMessage({ id: 'contact-fullname' })}
              required
              min={5}
            />
          </FormItem>
          <FormItem>
            <Title>{formatMessage({ id: 'contact-email' })}</Title>
            <Input
              onChange={evt => setEmail(evt.target.value)}
              value={email}
              placeholder={formatMessage({ id: 'contact-email' })}
              type="email"
              min={5}
              required
            />
          </FormItem>
          <FormItem>
            <Title>{formatMessage({ id: 'contact-phone' })}</Title>
            <Input
              onChange={evt => setPhone(evt.target.value)}
              value={phone}
              type="number"
              min={9}
              placeholder={formatMessage({ id: 'contact-phone' })}
            />
          </FormItem>
          <FormItem>
            <Title>{formatMessage({ id: 'contact-animal-name' })}</Title>
            <Input
              onChange={evt => setAnimalName(evt.target.value)}
              value={animalName}
              min={2}
              placeholder={formatMessage({ id: 'contact-animal-placeholder' })}
            />
          </FormItem>
          <FormItem>
            <Title>{formatMessage({ id: 'contact-note' })}</Title>
            <TextArea
              onChange={evt => setNote(evt.target.value)}
              value={note}
              rows="4"
              cols="50"
              min={10}
              placeholder={formatMessage({ id: 'contact-note' })}
            />
          </FormItem>
          <Button secondary type="submit" disabled={interestedIn.length === 0}>
            {formatMessage({ id: 'contact-send' })}
          </Button>
        </Form>
      </Wrapper>
    </Section>
  )
}

export default ContactForm
