import React, { FC, useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import tailwind from 'tailwind-rn';
import { AuthContext } from '../auth/auth';
import Pageheader from '../../shared/components/Pageheader/Pageheader';

const DashboardScreen: FC = () => {
  const [shouldLogout, setShouldLogout] = useState<boolean>(false);
  const { logout } = useContext(AuthContext);
  const data = [
    {
      from_place: 'Thimphu',
      to_place: 'Bumthang',
      price: 100.0,
      pieces: 3,
      weight: '10kg',
      phone: '17949642',
      name: 'Phuntsho Norbu',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
    {
      from_place: 'P/gathsel',
      to_place: 'Bumthang',
      price: 4300.0,
      pieces: 8,
      weight: '50kg',
      phone: '17942422',
      name: 'Sangay Chezom',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
    {
      from_place: 'Thimphu',
      to_place: 'Mongar',
      price: 1000.0,
      pieces: 12,
      weight: '23kg',
      phone: '77889966',
      name: 'Pema Dorji',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
    {
      from_place: 'Lhuntse',
      to_place: 'S/Jongkhar',
      price: 789.0,
      pieces: 6,
      weight: '32kg',
      phone: '17981235',
      name: 'Sonam Zangmo',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
    {
      from_place: 'Mongar',
      to_place: 'Zhemgang',
      price: 1235.0,
      pieces: 3,
      weight: '10kg',
      phone: '17949642',
      name: 'Phuntsho Norbu',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
    {
      from_place: 'Thimphu',
      to_place: 'Phuntsholing',
      price: 3465.0,
      pieces: 3,
      weight: '7kg',
      phone: '17171712',
      name: 'Kuenzang Wangmo',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
    {
      from_place: 'Paro',
      to_place: 'Haa',
      price: 550.0,
      pieces: 1,
      weight: '10kg',
      phone: '17892317',
      name: 'Dorji Gyeltshen',
      image: 'https://phuntshonorbu.com/images/gallery/Lungchutse/IMG_6846.jpg',
    },
  ];

  useEffect(() => {
    if (shouldLogout) logout();
  }, [shouldLogout, logout]);

  return (
    <Container>
      <Content>
        <Pageheader navigation page="dashboard" />
        <View
          style={[
            tailwind('bg-white px-5 py-3 pb-3 -my-10 rounded-t-3xl '),
            { height: Dimensions.get('window').height },
          ]}
        >
          <Text>yo yo man </Text>
          {data.map((item) => (
            <View
              style={[
                tailwind('bg-white m-2 flex flex-row rounded-3xl'),
                {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 2.62,

                  elevation: 4,
                },
              ]}
            >
              <View style={tailwind('w-24 border')}>
                <Image
                  style={tailwind('w-26')}
                  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
              </View>

              <View style={tailwind('flex-1 px-2 pt-4')}>
                <View style={tailwind('mb-3')}>
                  <View style={tailwind('flex flex-row')}>
                    <View style={tailwind('flex-1 border-r border-gray-200')}>
                      <Text style={tailwind('text-center')}>
                        {item.from_place}
                      </Text>
                      <Text style={tailwind('text-center')}>to</Text>
                      <Text style={tailwind('text-center')}>
                        {item.to_place}
                      </Text>
                    </View>
                    <View style={tailwind('flex-1 border-r border-gray-200')}>
                      <Text style={tailwind('text-center')}>Price</Text>
                      <Text style={tailwind('text-center')}>
                        Nu {item.price}
                      </Text>
                    </View>
                    <View style={tailwind('flex-1 border-gray-200')}>
                      <Text style={tailwind('text-center')}>
                        Nos: {item.pieces}
                      </Text>
                      <Text style={tailwind('text-center')}>{item.weight}</Text>
                    </View>
                  </View>
                </View>

                <View
                  style={tailwind('flex-row border-t border-gray-100 py-2')}
                >
                  <View style={tailwind('flex-1')}>
                    <Text style={tailwind('text-center')}>Call</Text>
                  </View>
                  <View style={tailwind('flex-1')}>
                    <Text style={tailwind('text-center')}>Detail</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Content>
      <View
        style={tailwind(
          'bg-green-400 px-5 py-3 text-center absolute bottom-0 w-full'
        )}
      >
        <TouchableOpacity>
          <Text style={tailwind('text-white text-center font-semibold')}>
            Post Job
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default DashboardScreen;
