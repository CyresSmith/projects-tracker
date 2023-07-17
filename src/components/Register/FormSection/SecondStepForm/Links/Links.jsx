import { useState } from 'react';
import { Field, Formik, FieldArray, ErrorMessage } from 'formik';
import { MdClose } from 'react-icons/md';

import Input from 'components/shared/Input';
import { LinksBox, LinksForm, LinksList, Link } from './Links.styled';
import Button from 'components/shared/button/Button';
import IconButton from 'components/shared/button/IconButton/IconButton';
import { Label } from 'components/shared/Input/Input.styled';
import { SubLabel } from '../../RegisterForm/Textarea/Textarea.styled';

const Links = ({ values }) => {
  return (
    <LinksBox>
      <Label id="linksLabel">Share the links</Label>
      <SubLabel id="linksSubLabel">Dropbox, GDrive, WeTransfer, etc.</SubLabel>
      <LinksForm name="links">
        {({ insert, remove, push }) => (
          <>
            <LinksList>
              {values.links.map((link, i) => {
                return (
                  <Link key={i}>
                    <Input
                      type="text"
                      id={`links.${i}`}
                      placeholder="https://"
                    />

                    {values.links.length > 1 && (
                      <IconButton
                        icon={MdClose}
                        iconSize={24}
                        type="button"
                        onClick={() => remove(i)}
                        round
                      />
                    )}
                  </Link>
                );
              })}
            </LinksList>

            <Button
              disabled={values.links.length > 9}
              id="addLink"
              onClick={() => push('')}
            >
              Add link
            </Button>
          </>
        )}
      </LinksForm>
    </LinksBox>
  );
};

export default Links;
