import * as React from 'react';
import { Button, Icon, Label, Segment } from 'semantic-ui-react';

export default {
    title: 'Button',
    component: Button
};

export const Standard = () => (
    <Button>Basic</Button>
);

export const Emphasis = () => (
    <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
);

export const Animated = () => (
    <div>
        <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
            <Icon name='arrow right' />
        </Button.Content>
        </Button>
        <Button animated='vertical'>
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
            <Icon name='shop' />
        </Button.Content>
        </Button>
        <Button animated='fade'>
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
        </Button>
  </div>
);

export const Labeled = () => (
    <div>
        <Button as='div' labelPosition='right'>
        <Button icon>
            <Icon name='heart' />
            Like
        </Button>
        <Label as='a' basic pointing='left'>
            2,048
        </Label>
        </Button>
        <Button as='div' labelPosition='left'>
        <Label as='a' basic pointing='right'>
            2,048
        </Label>
        <Button icon>
            <Icon name='heart' />
            Like
        </Button>
        </Button>
        <Button as='div' labelPosition='left'>
        <Label as='a' basic>
            2,048
        </Label>
        <Button icon>
            <Icon name='fork' />
        </Button>
        </Button>
    </div>
);

export const LabeledUsingShorthand = () => (
    <div>
        <Button
        content='Like'
        icon='heart'
        label={{ as: 'a', basic: true, content: '2,048' }}
        labelPosition='right'
        />
        <Button
        content='Like'
        icon='heart'
        label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
        labelPosition='left'
        />
        <Button
        icon='fork'
        label={{ as: 'a', basic: true, content: '2,048' }}
        labelPosition='left'
        />
    </div>    
);

export const IconButton = () => (
    <div>
        <Button icon>
            <Icon name='world' />
        </Button>        
    </div>
);

export const LabeledIcon = () => (
    <div>
        <Button icon labelPosition='left'>
            <Icon name='pause' />
            Pause
        </Button>
    </div>
);

export const Basic = () => (
    <div>
    <Button basic>Standard</Button>
    <Button basic color='red'>
      Red
    </Button>
    <Button basic color='orange'>
      Orange
    </Button>
    <Button basic color='yellow'>
      Yellow
    </Button>
    <Button basic color='olive'>
      Olive
    </Button>
    <Button basic color='green'>
      Green
    </Button>
    <Button basic color='teal'>
      Teal
    </Button>
    <Button basic color='blue'>
      Blue
    </Button>
    <Button basic color='violet'>
      Violet
    </Button>
    <Button basic color='purple'>
      Purple
    </Button>
    <Button basic color='pink'>
      Pink
    </Button>
    <Button basic color='brown'>
      Brown
    </Button>
    <Button basic color='grey'>
      Grey
    </Button>
    <Button basic color='black'>
      Black
    </Button>
  </div>
);

export const Inverted = () => (
    <div>
    <Segment inverted>
      <Button inverted>Standard</Button>
      <Button inverted color='red'>
        Red
      </Button>
      <Button inverted color='orange'>
        Orange
      </Button>
      <Button inverted color='yellow'>
        Yellow
      </Button>
      <Button inverted color='olive'>
        Olive
      </Button>
      <Button inverted color='green'>
        Green
      </Button>
      <Button inverted color='teal'>
        Teal
      </Button>
      <Button inverted color='blue'>
        Blue
      </Button>
      <Button inverted color='violet'>
        Violet
      </Button>
      <Button inverted color='purple'>
        Purple
      </Button>
      <Button inverted color='pink'>
        Pink
      </Button>
      <Button inverted color='brown'>
        Brown
      </Button>
      <Button inverted color='grey'>
        Grey
      </Button>
      <Button inverted color='black'>
        Black
      </Button>
    </Segment>
    <Segment inverted>
      <Button basic inverted>
        Standard
      </Button>
      <Button basic inverted color='red'>
        Red
      </Button>
      <Button basic inverted color='orange'>
        Orange
      </Button>
      <Button basic inverted color='yellow'>
        Yellow
      </Button>
      <Button basic inverted color='olive'>
        Olive
      </Button>
      <Button basic inverted color='green'>
        Green
      </Button>
      <Button basic inverted color='teal'>
        Teal
      </Button>
      <Button basic inverted color='blue'>
        Blue
      </Button>
      <Button basic inverted color='violet'>
        Violet
      </Button>
      <Button basic inverted color='purple'>
        Purple
      </Button>
      <Button basic inverted color='pink'>
        Pink
      </Button>
      <Button basic inverted color='brown'>
        Brown
      </Button>
      <Button basic inverted color='grey'>
        Grey
      </Button>
      <Button basic inverted color='black'>
        Black
      </Button>
    </Segment>
  </div>    
);

export const Group = () => (
    <Button.Group>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </Button.Group>    
);

export const IconGroup = () => (
    <div>
    <Button.Group>
      <Button icon>
        <Icon name='align left' />
      </Button>
      <Button icon>
        <Icon name='align center' />
      </Button>
      <Button icon>
        <Icon name='align right' />
      </Button>
      <Button icon>
        <Icon name='align justify' />
      </Button>
    </Button.Group>{' '}
    <Button.Group>
      <Button icon>
        <Icon name='bold' />
      </Button>
      <Button icon>
        <Icon name='underline' />
      </Button>
      <Button icon>
        <Icon name='text width' />
      </Button>
    </Button.Group>
  </div>
);
