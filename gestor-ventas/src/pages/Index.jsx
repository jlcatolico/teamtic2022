import React from 'react'
import Valen from 'Media/VALEN.png'
import Lorenzo from 'Media/LORENZO.jpg'
import Daniel from 'Media/DANIEL.jpg'
import Ricardo from 'Media/RICARDO.png'
import Maria from 'Media/MARIA.jpg'

const Index = () => {
    return (
        <div className="ml-1 w-full bg-gradient-to-br from-gray-200 via-gray-500 to-gray-900">
            <section className="max-w-full m-0 p-0">
                <div className="relative flex justify-center h-32">
                    <div className="w-full">
                        <h2 className="flex justify-center text-4xl font-bold  text-blueGray-700">Team_MisionTIC2021</h2>
                        <p className="flex justify-center font-bold text-blueGray-400 uppercase text-9x1 leading-relaxed p-8 text-blueGray-500">
                        Sprint2 - interfaces del aplicativo
                        </p>
                    </div>
                </div>
            </section >
            <section className="relative flex items-center justify-between">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="px-6">
                            <img alt="VALEN" src={Valen} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold text-blueGray-700">Valentina Arbeláez</h5>
                                <p className="mt-1 text-sm text-blueGray-700 uppercase font-semibold">Desarrolladora</p>
                                <div className="mt-6">
                                    <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-google"></i></button><button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-twitter"></i></button><button className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="w-full">
                        <div className="px-6">
                            <img alt="..." src={Lorenzo} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold text-blueGray-700">Lorenzo Catolico</h5>
                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                Analista
                            </p>
                            <div className="mt-6">
                                <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-google"></i></button><button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="px-6">
                        <img alt="..." src={Daniel} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold text-blueGray-700">Daniel Vasquez</h5>
                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Product Owner</p>
                            <div className="mt-6">
                                <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-google"></i></button><button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="px-6">
                        <img alt="..." src={Ricardo} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold text-blueGray-700">Ricardo Corredor</h5>
                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Adm_BD</p>
                            <div className="mt-6">
                                <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-google"></i></button><button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="px-6">
                        <img alt="..." src={Maria} className="shadow-lg rounded-full mx-auto max-w-120-px"/>
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold text-blueGray-400">Maria F. Medina</h5>
                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Scrum_Master</p>
                            <div className="mt-6">
                                <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-google"></i></button><button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                    <i className="fab fa-instagram"></i>
                                </button>                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index;
