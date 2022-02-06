<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Company;
use Symfony\Component\Uid\Uuid;
use Doctrine\ORM\Id\AssignedGenerator;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $companies = [];

        foreach ($this->getCompanies() as $key => $data) {
            $company = $this->getCompany($data);

            $metadata = $manager->getClassMetaData(Company::class);
            $metadata->setIdGeneratorType(\Doctrine\ORM\Mapping\ClassMetadata::GENERATOR_TYPE_NONE);
            $metadata->setIdGenerator(new AssignedGenerator());

            $manager->persist($company);

            $companies[$key] = $company;
        }

        foreach ($this->getUsers() as $data) {
            $user = $this->getUser($data, $companies);

            $metadata = $manager->getClassMetaData(User::class);
            $metadata->setIdGeneratorType(\Doctrine\ORM\Mapping\ClassMetadata::GENERATOR_TYPE_NONE);
            $metadata->setIdGenerator(new AssignedGenerator());

            $manager->persist($user);
        }

        $manager->flush();
    }

    private function getCompany(array $data)
    {
        return
            (new Company())
                ->setId(Uuid::fromString($data['id']))
                ->setName($data['name'])
                ->setAddress($data['address']);
    }

    private function getUser(array $data, array $companies)
    {
        $user = (new User())
            ->setId(Uuid::fromString($data['id']))
            ->setEmail($data['email'])
            ->setRoles($data['roles'])
            ->setPassword($data['password']);

        return $data['company']
            ? $user->setCompany($companies[$data['company']])
            : $user;
    }

    private function getCompanies()
    {
        return [
            'wyloo' => [
                'id' => '278fd5c8-7d41-45be-9d97-4dcf34236eea',
                'name' => 'Wyloo',
                'address' => '9 rue de l\'Aigle La Possession'
            ],
            'esgi' => [
                'id' => 'a42ac85b-220f-4fc4-b3b6-ded00b58f9aa',
                'name' => 'ESGI',
                'address' => '242 Rue du Faubourg Saint-Antoine, 75012 Paris'
            ]
        ];
    }

    private function getUsers()
    {
        return [
            [
                'id' => '36475f9e-7cc0-4b81-8d1a-31ce933d8488',
                'email' => 'test@test.fr',
                'roles' => [
                    'ROLE_ADMIN',
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '18f99ff0-f024-4569-b39b-7ade0277ce88',
                'email' => 'julien@test.fr',
                'roles' => [
                    'ROLE_LEADER',
                    'ROLE_USER'
                ],
                'company' => 'esgi',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '9014fbff-bcfd-40a0-b5f1-194aa456a201',
                'email' => 'samuel@test.fr',
                'roles' => [
                    'ROLE_PUBLISHER',
                    'ROLE_USER'
                ],
                'company' => 'esgi',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '6764aaa0-2689-4c22-8d97-99f859d59f95',
                'email' => 'paulette@test.fr',
                'roles' => [
                    'ROLE_EDITOR',
                    'ROLE_USER'
                ],
                'company' => 'esgi',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '5cd072d2-96e0-494c-b262-9f56b0f931a1',
                'email' => 'valentine@test.fr',
                'roles' => [
                    'ROLE_PUBLISHER',
                    'ROLE_EDITOR',
                    'ROLE_USER'
                ],
                'company' => 'esgi',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'e51b1116-4613-4eaf-82c4-082f5d7ea139',
                'email' => 'pierre@test.fr',
                'roles' => [
                    'ROLE_LEADER',
                    'ROLE_USER'
                ],
                'company' => 'wyloo',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'c94c950b-0804-4806-88ac-7d6a4355cd17',
                'email' => 'thibeault@test.fr',
                'roles' => [
                    'ROLE_PUBLISHER',
                    'ROLE_USER'
                ],
                'company' => 'wyloo',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '763f2bf3-fe9d-4da2-a1a2-5086be801f23',
                'email' => 'theo@test.fr',
                'roles' => [
                    'ROLE_EDITOR',
                    'ROLE_USER'
                ],
                'company' => 'wyloo',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'a5ef3b0f-61b9-41ec-8b14-390c61f0300b',
                'email' => 'alexandre@test.fr',
                'roles' => [
                    'ROLE_PUBLISHER',
                    'ROLE_EDITOR',
                    'ROLE_USER'
                ],
                'company' => 'wyloo',
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'cdd7d271-797b-44dd-9a95-b50eabdf4141',
                'email' => 'jammy@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '278fd5c8-7d41-45be-9d97-4dcf34236eea',
                'email' => 'thierry@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'a42ac85b-220f-4fc4-b3b6-ded00b58f9aa',
                'email' => 'julie@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '6f7a115e-7cf4-418d-a8e7-12aa74d5141e',
                'email' => 'clara@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '0772131d-6f48-4ce3-befb-a2e80d5f16c5',
                'email' => 'anais@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '22824b91-cd56-4ddf-9746-0220a0999dea',
                'email' => 'salome@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '6a0c4510-ae4d-423d-a689-a840fa678283',
                'email' => 'mathilda@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'a18c80c4-acc4-4b24-a62e-aee7d44d47ef',
                'email' => 'louane@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'c91ec54e-97d1-411c-920c-e99f0ce2bd4f',
                'email' => 'damso@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '2dd01a48-01ba-4e14-a036-1731381bfa5e',
                'email' => 'celia@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '234d3af8-d29d-4942-89d7-b2b5a5a9fa1b',
                'email' => 'orkia@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'ce863755-b387-4aab-9d53-1c91c301c365',
                'email' => 'david@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => 'ec02a000-d051-45f0-8643-bc9c13605fa7',
                'email' => 'chloe@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
            [
                'id' => '7dc01842-5e33-410e-8afd-8bb441647c78',
                'email' => 'charlotte@test.fr',
                'roles' => [
                    'ROLE_USER'
                ],
                'company' => null,
                'password' => '$2y$13$OsSCEI3vkqI0GYASucWxbuqWRE56tnB/6X.m6Vv3GPx6PftcOjB..'
            ],
        ];
    }
}
