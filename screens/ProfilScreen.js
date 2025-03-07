import { StyleSheet, View, ScrollView, Text} from 'react-native';
import HeaderNavigation from './components/HeaderNavigation'; 
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
import ButtonBig from './components/ButtonBig';
import { logOut } from '../reducers/users';
import { useDispatch } from 'react-redux';

export default function ProfilScreen({ navigation }) {
    const user = useSelector(state => state.user.value);
    console.log(user)
    const dispatch = useDispatch();

    const [fontsLoaded, fontError] = useFonts({
        'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
        'RopaSans-Regular': require('../assets/fonts/RopaSans-Regular.ttf'),
      });

    const handleLogOut = () => {
        dispatch(logOut()); // Déclenche l'action logOut
        navigation.navigate('Home')
        console.log('Utilisateur déconnecté');
    };

    return (
    <View style={styles.container}>
            <LinearGradient
                colors={['rgba(34,193,195,1)', 'rgba(253,187,45,1)']} // Couleurs du dégradé
                start={{ x: 0, y: 1 }} // Point de départ du dégradé (0,1 = bas)
                end={{ x: 0, y: 0 }} // Point d'arrivée du dégradé (0,0 = haut)
                style={styles.header}
                >
            <HeaderNavigation onPress={() => navigation.navigate("Connection")}/>  
        </LinearGradient> 
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.containerProfil}>
                <View style={styles.containerProfilAvatar}>
                    <Text style={styles.containerProfilInitial}>{user?.firstname?.charAt(0).toUpperCase() || '?'}{user?.lastname?.charAt(0).toUpperCase() || '?'}</Text>
                </View>
                <View style={styles.containerProfilInfos}>
                    <Text style={styles.containerProfilInfosWelcome}>Bienvenue</Text>
                    <Text style={styles.containerProfilInfosName}>{user.firstname} {user.lastname}</Text>
                </View>
            </View>
            <ButtonBig style={styles.buttonSell} text="Vendez votre article" onPress={() => navigation.navigate('Vendre')} />
            <ButtonBig style={styles.buttonNav} text="Mes articles" onPress={() => navigation.navigate('Vendre')} />
            <ButtonBig style={styles.buttonNav} text="Mes favoris" onPress={() => navigation.navigate('Favoris')} />
            <ButtonBig style={styles.buttonNav} text="FAQ" onPress={() => navigation.navigate('Vendre')} />
            <ButtonBig style={styles.buttonNav} text="Déconnexion" onPress={handleLogOut} />
        </ScrollView>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffff',
    },
    header: {
        padding: 20,
        borderBottomColor: '#00000',
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
        alignItems: 'center', 
        width: '100%', 
        padding: 20, 
    },
    article: {
        width: '48%', 
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    containerProfil: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    containerProfilAvatar: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: "#00000",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00CC99',
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    containerProfilInitial: {
        fontFamily: 'LilitaOne-Regular',
        fontSize: 47,
    },
    containerProfilInfos: {
        marginLeft: 40,
    },
    containerProfilInfosWelcome: {
        fontSize: 35,
        marginBottom: 5,
        fontFamily: 'LilitaOne-Regular',
    },
    containerProfilInfosName: {
        fontSize: 25,
        fontFamily: 'LilitaOne-Regular',
    },
    buttonSell: {
        backgroundColor: '#F095B4',
    },
    buttonNav: {
        backgroundColor: '#00CC99',
    },

})
